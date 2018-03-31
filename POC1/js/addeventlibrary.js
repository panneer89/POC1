$(document).ready(function(){
    
    var sportData = [];
    var submitFlag = false;
    var errorFlag = false;
    var eventName = '', coachName = '' , memberFee = '' ;
    
/*Initial Validation for first Name*/
    $('#aeeventname').on('blur',function(){
        eventName = $('#aeeventname').val();
        eventNameVal();
    });
/*Initial Validation for father Name*/
    $('#aecoach').on('blur',function(){
        coachName = $('#aecoach').val();
        coachNameVal();
    });
    
/*Initial Validation for gender*/
    $('#aefee').on('blur',function(){
        memberFee = $('#aefee').val();
        memberFeeVal();
    });


/*First Name error handling function*/
    var eventNameVal = function() {
        if (eventName.length == 0 ) {
            $('#aeeventmessage').html('Event name is mandatory');
            errorFlag = true;
        }
        else {
            $('#aeeventmessage').html('');
            errorFlag = false;
        }
    }

/*Father Name error handling function*/
    var coachNameVal = function() {
         if (coachName.length == 0 ) {
            $('#aecoachmessage').html('Coach Name is mandatory');
            errorFlag = true;
        }
        else {
            $('#aecoachmessage').html('');
            errorFlag = false;
        }
    };

/*gender error handling function*/
    var memberFeeVal = function() {
        if (memberFee.length == 0 ) {
            $('#aefeemessage').html('Membership Fee is mandatory');
            errorFlag = true;
        }
        else {
            $('#aefeemessage').html('');
            errorFlag = false;
        }
    };

/*address line 1 error handling function
    var addr1Val = function() {
        if (addr1.length == 0 ) {
            $('#add1message').html('Address field is mandatory');
            errorFlag = true;
        }
        else {
             $('#add1message').html('');
             errorFlag = false;

        }
    };*/
    
    var i = 0;

    $('#submit').on('click',function(){
        coachNameVal();
        memberFeeVal();
        eventNameVal();
        
        var arr = {}, i=1;
        $( "input:checked" ).each(function(index, value) {
            arr["slot"+i++] =$(this).val();
            console.log(arr);
        });
    
        if (errorFlag == false)
            {
            console.log(errorFlag);
            var timings = 0;
            var session = {
                "value": eventName,
                "data": {
                  "event": eventName,
                  "timings": arr,
                  "fee": memberFee,
                  "coach": coachName,
                  "Notes": ""
                }
            };
            
            
            console.log(session);
                localStorage.setItem("eventDetail",JSON.stringify(session));
            } else {
                return false;
            };
            
    });
    
    $('#clear').on('click',function(){
        $('#aeeventname, #aecoach, #aefee').val('');
    });
});
    

