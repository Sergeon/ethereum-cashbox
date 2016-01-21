

contract("Cashbox" , function(accounts){

    var cashbox = null;


    it("constructor is OK" , function(done){

        var aLimit = null;
        var aBenef = null;


        Cashbox.at(Cashbox.deployed_address);


        Cashbox.new(  accounts[1] , 1000   )

        .then(function(c){
            cashbox = c;

            return cashbox.limit.call();

        })

        .then(function(lim){
            aLimit = lim;
            return cashbox.beneficiary.call();
        })


        .then(function(benef){

            aBenef = benef;


            return cashbox.owner.call();

        })


        .then(function(owner){

            assert.equal(aLimit.toNumber() , 1000 , "limit should be 1000");
            assert.equal(aBenef , accounts[1] , "beneficiary should be the second account");
            assert.equal(owner , accounts[0] , "The owner should be the default account");

        })

        .then(done).catch(done);
    });


    it("contract is persistent over tests" , function(done){


        cashbox.limit.call()

        .then(function(value){
            assert.equal(value.toNumber(), 1000 , "limit should have persisted form the first test");
        })

        .then(done).catch(done);

    });


    it("accounts work OK" , function(done){

        var balanceBeforeSend;
        var balanceAfterSend;
        var balanceAfterWithdraw;

        new Promise( function(resolve , error ){

                return web3.eth.getBalance(accounts[1], function(err, hashValue ){

                        if(err)
                            return error(err);
                        else {
                            return resolve(hashValue);
                        }
                }) ;
        } )

        .then(function(balance_beneficiary_before_send){
            balanceBeforeSend = balance_beneficiary_before_send;

            console.log("The beneficiary balance before sending funds is : " + balance_beneficiary_before_send.toNumber() );

            return web3.eth.getBalance(cashbox.address);
        })


        .then(function(balance_cashbox_before_send){

            console.log("Balance of cashbox contract before send is : " + balance_cashbox_before_send.toNumber() );
            return web3.eth.sendTransaction({  to : cashbox.address , value : "2000000000000000000" , from : accounts[1] } );
        })

        .then(function(txResult){

            return web3.eth.getBalance(cashbox.address  );
        })

        .then(function(balance_cashbox_after_send ){

            console.log("balance of contract cashbox after ether send : " + balance_cashbox_after_send.toNumber() );

            return web3.eth.getBalance(accounts[1]);

        })

        .then(function(balance_beneficiary_after_send){
            balanceAfterSend = balance_beneficiary_after_send;
            console.log("balance of beneficiary after the send transaction : " + balance_beneficiary_after_send.toNumber() );
            return cashbox.withdraw({from : accounts[1] });
        })

        .then(function(withdrawResult){

            return web3.eth.getBalance(accounts[0]);
        })


        .then(function( balance_beneficiary_after_withdraw){
            balanceAfterWithdraw = balance_beneficiary_after_withdraw;
            console.log("balance of beneficiary after witdraw : " + balance_beneficiary_after_withdraw.toNumber() );

            return web3.eth.getBalance(cashbox.address);
        })

        .then(function(balance_cashbox_after_withdraw){

            console.log("balance of cashbox after witdraw : " + balance_cashbox_after_withdraw.toNumber() );

            assert.equal(balance_cashbox_after_withdraw.toNumber() , 0 , "Contract balance should be 0 after a withdraw");
            assert.notEqual(balanceBeforeSend.toNumber() , balanceAfterSend.toNumber() , "beneficiary address balance should not remain equal after a deposit" );
        }).then(done).catch(done);



    })

});
