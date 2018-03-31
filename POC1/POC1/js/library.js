$(document).ready(function(){
    
    var sportData = [];
    var editValue = '';
    var mainNumeric = true;
    var submitFlag = false;
    var errorFlag = false;
    var fName = '', lName = '' ,gender = '' , dob = '' , faName = '' , moName = ''  ,addr1 = '' , addr2 = '' , addr3 = '' , pincode = ''  ,email = '' , mobileNo = ''  ,secondNo = '' 
    , occupation = '' , medicalCond = '' , height = '' , weight = '' , sport = '' , session = '' , memberFee = '', coachName = '', retrievedObject='',  birthDate='' ;
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var memberId = 'CLUB000001';
    
/*Initial Validation for first Name*/
    $('#firstname').on('blur',function(){
        fName = $('#firstname').val();
        firstNameVal();
    });
/*Initial Validation for father Name*/
    $('#fathername').on('blur',function(){
        faName = $('#fathername').val();
        faNameVal();
    });
    
/*Initial Validation for gender*/
    $('#gender').on('blur',function(){
        gender = $('#gender').val();
        genderVal();
    });

/*Initial Validation for address line1*/    
    $('#address1').on('blur',function(){
        addr1 = $('#address1').val();
        addr1Val();
    });
    
/*Initial Validation for pincode*/
    $('#pincode').on('blur',function(){
        pincode = $('#pincode').val();
        pinVal();
    });

/*Initial Validation for email*/    
    $('#email').on('blur',function(){
        email = $('#email').val();
        emailVal();
    });

/*Initial Validation for contact*/
    $('#contact').on('blur',function(){
        mobileNo = $('#contact').val();
        contactVal();   
    });

/*Initial Validation for secondary contact*/
    $('#secondcontact').on('blur',function(){
        secondNo = $('#secondcontact').val();
        secContactVal();
    });

/*Initial Validation for  occupation*/
    $('#occupation').on('blur',function(){
        occupation = $('#occupation').val();
        occupationVal();
    });
    
/*Initial Validation for medical condition*/
    $('#medicalcond').on('blur',function(){
        medicalCond = $('#medicalcond').val();
        medicalVal();
    });

/*Initial Validation for height*/
    $('#height').on('blur',function(){
       height = $('#height').val();
       heightVal();
    });

/*Initial Validation for weight*/
    $('#weight').on('blur',function(){
        weight = $('#weight').val();
        weightVal();
    });
    
    
/*Initial Validation for dob*/

    
    dob = $('.sandbox-container input').datepicker({
        clearBtn: true
    });
    
    

/*First Name error handling function*/
    var firstNameVal = function() {
        if (fName.length == 0 ) {
            $('#fnamemessage').html('first name is mandatory');
            errorFlag = true;
        }
        else {
            $('#fnamemessage').html('');
            errorFlag = false;
        }
    }

/*Father Name error handling function*/
    var faNameVal = function() {
         if (faName.length == 0 ) {
            $('#fanamemessage').html('Father Name is mandatory');
            errorFlag = true;
        }
        else {
            $('#fanamemessage').html('');
            errorFlag = false;
        }
    };

/*gender error handling function*/
    var genderVal = function() {
        if (gender.length == 0 ) {
            $('#gendermessage').html('Gender is mandatory');
            errorFlag = true;
        }
        else {
            $('#gendermessage').html('');
            errorFlag = false;
        }
    };

/*address line 1 error handling function*/
    var addr1Val = function() {
        if (addr1.length == 0 ) {
            $('#add1message').html('Address field is mandatory');
            errorFlag = true;
        }
        else {
             $('#add1message').html('');
             errorFlag = false;

        }
    };

/*pincode error handling function*/
    var pinVal = function () {
        if (pincode.length == 0 ) {
            $('#pinmessage').html('Pincode is mandatory');
            errorFlag = true;
        } else if ($.isNumeric(pincode) == false ) {
            $('#pinmessage').html('Pin Code should be Numeric');
            errorFlag = true;
        }
        else {
             $('#pinmessage').html('');
             errorFlag = false;
        }
    };

/*email error handling function*/
     var emailVal = function () {
         if (email.length == 0 ) {
            $('#emailmessage').html('Email is mandatory');
            errorFlag = true;
        } else if (emailRegex.test(email) == false) {
            $('#emailmessage').html('Email is not valid');
            errorFlag = true;
        }
        else {
             $('#emailmessage').html('');
             errorFlag = false;
        }
     };

/*mobile number error handling function*/
     var contactVal = function () {
        if (mobileNo.length == 0 ) {
            $('#mobilemessage').html('Mobile Number is mandatory');
            errorFlag = true;
        } else if ($.isNumeric(mobileNo) == false ) {
            $('#mobilemessage').html('Mobile Number should be Numeric');
            errorFlag = true;
        }else if (mobileNo.length != 10 ) {
            $('#mobilemessage').html('Mobile Number should be 10 digits');
            errorFlag = true;
        }
        else {
            $('#mobilemessage').html('');
            errorFlag = false;
        }
     };

/*secondary contact error handling function*/
    var secContactVal = function () {
         if (secondNo.length == 0 ) {
            $('#secmessage').html('secondary Number is mandatory');
            errorFlag = true;
        } else if ($.isNumeric(secondNo) == false ) {
            $('#secmessage').html('Secondary Number should be Numeric');
            errorFlag = true;
        }
        else {
             $('#secmessage').html('');
             errorFlag = false;
        }
    };

/*occuptation error handling function*/
    var occupationVal = function () {
         if (occupation.length == 0 ) {
            $('#occupmessage').html('Occupation is mandatory');
            errorFlag = true;
        }
        else {
             $('#occupmessage').html('');
             errorFlag = false;
        }
    };

/*medical condition error handling function*/
     var medicalVal = function () {
         if (medicalCond.length == 0 ) {
            $('#medcondmessage').html('Medical conditions are mandatory');
            errorFlag = true;
        }
        else {
            $('#medcondmessage').html('');
            errorFlag = false;
        }
     };

/*height error handling function*/
    var heightVal = function () {
        if (height.length == 0 ) {
            $('#heightmessage').html('Height is mandatory');
            errorFlag = true;
        } else if ($.isNumeric(height) == false ) {
            $('#heightmessage').html('Height should be Numeric');
            errorFlag = true;
        }
        else {
             $('#heightmessage').html('');
             errorFlag = false;
        }
    }; 
    
/*weight error handling function*/
    var weightVal = function () {
        if (weight.length == 0 ) {
            $('#weightmessage').html('Weight is mandatory');
            errorFlag = true;
        } else if ($.isNumeric(weight) == false ) {
            $('#weightmessage').html('Weightr should be Numeric');
            errorFlag = true;
        }
        else {
            $('#weightmessage').html('');
            errorFlag = false;
        }
    }; 

    $.getJSON( "Data/event.json", function(data) {
        sportData = data;
         $.each( sportData, function(ke, va) {
            $("#sport").append($("<option></option>").val(va.value).html(va.value));
        });
    });
    
    $('#sport').on('change',function(){
        $("#session").empty();
        $('#sportmessage').html('');
        $.each( sportData, function(key,val) {
            sport = $('#sport').val();
            if(val.value ==  sport){
                 $.each(val.data.timings, function(index, value) {
                    $("#session").append($("<option></option>").val(value).html(value));
                 });
                 $('#amount').val(val.data.fee);
                $('#coach').val(val.data.coach);
                memberFee = $('#amount').val();
                coachName = $('#coach').val();
            };
        });
    });
    
     $('#session').on('select',function(){
         session =  $('#session').val();
     });
    
    $('#submit').on('click',function(){
        firstNameVal();
        faNameVal();
        dobFunc();
        sportingFunc();
        genderVal();
        addr1Val();
        emailVal();
        pinVal();
        contactVal();
        secContactVal();
        occupationVal();
        medicalVal();
        heightVal();
        weightVal();
        genderVal();
        addr1Val();
        
        lName = $('#lastname').val();
        moName = $('#mothername').val();
        addr2 = $('#address2').val();
        addr3 = $('#address3').val();
        birthDate = dob.val();
        session =  $('#session').val();
        
        var age = calculateAge(birthDate);
        alert(age);
        
        if (age <= 16 ) {
            $('#dobmessage').html('Age should be greater than 16');
            errorFlag = true;
            } 
        else {
            $('#dobmessage').html('');
            errorFlag = false;
        }
        
        if (errorFlag == false)
            {
                console.log(errorFlag);
                var data = {
                    "membershipid" : memberId,
                    "fName" : fName,
                    "gender" : gender,
                    "dob" : birthDate,
                    "faName" : faName,
                    "moName" : moName,
                    "addr1" : addr1,
                    "addr2" : addr2,
                    "addr3" : addr3,
                    "pincode" : pincode,
                    "email" : email,
                    "mobileNo" : mobileNo,
                    "secondNo" : secondNo,
                    "occupation" : occupation,
                    "medicalCond" : medicalCond,
                    "height" : height,
                    "weight" : weight,
                    "sport" : sport,
                    "session" : session,
                    "memberFee" : memberFee,
                    "coachName" : coachName
                }
                localStorage.setItem("memberDetail",JSON.stringify(data));
            } else {
                return false;
            };
    });

    $('#clear').on('click',function(){
        $('#firstname, #lastname, #gender, #dob, #fathername, #mothername, #address1, #address2, #address3, #pincode, #email, #contact, #secondcontact, #sport, #session, #team, #amount, #occupation, #medicalcond, #height, #weight').val('');
    });

    var dobFunc = function () {

        if (dob.length == 0 ) {
            $('#dobmessage').html('DOB is mandatory');
            errorFlag = true;
        } 
        else {
            $('#dobmessage').html('');
            errorFlag = false;
        }
    };

    var sportingFunc = function () {
        sport = $('#sport').val();
        if (sport.length == 0 ) {
            $('#sportmessage').html('Sporting Event should not be empty');
            errorFlag = true;
        } 
        else {
            $('#sportmessage').html('');
            errorFlag = false;
        }
    };
    
    var calculateAge = function (birthDay) {
        
        // First we split the values to arrays date1[0] is the year, [1] the month and [2] the day
        birthDay = birthDay.split('/');
        
        // Now we convert the array to a Date object, which has several helpful methods
        var date1 = new Date(birthDay[2], birthDay[0]-1, birthDay[1]);
        
        var birthDayYear = date1.getFullYear();
        var birthDayMonth = date1.getMonth();
        var birthDayDate = date1.getDate();
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth();
        var currentDay = currentDate.getDate(); 
        var calculatedAge = currentYear - birthDayYear;
    
        if (currentMonth < birthDayMonth - 1) {
            calculatedAge--;
        }
        if (birthDayMonth - 1 == currentMonth && currentDay < birthDayDate) {
            calculatedAge--;
        }
        return calculatedAge;
    }

    
    
    
});
    

