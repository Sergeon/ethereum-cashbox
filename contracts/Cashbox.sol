contract Cashbox{


    address owner;

    uint public limit;
    address public beneficiary;

    function Cashbox( address _beneficiary , uint _limit  ){

        owner = msg.sender;
        beneficiary = _beneficiary;
        limit = _limit;

    }

    function withdraw() returns (bool){



        if(msg.sender != beneficiary )
            return false;


        if(this.balance > limit){

            var sent = beneficiary.send(this.balance);

        }
		else
			return false;


        if(sent)
            return true;
        else
            return false;
    }




}
