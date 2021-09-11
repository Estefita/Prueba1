



$(document).ready(function () {

    $.datepicker.setDefaults({
        monthNamesShort: ["ENE", "FEB", "MAR","ABR","MAY", "JUN", "JUL", "AGO","SEP", "OCT", "NOV",  "DIC",],
        dayNamesMin : [
            "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"
        ],
    });

    var utc = new Date().toLocaleDateString();

    $(function () {
      var from = $("#from").datepicker({
        dateFormat: "dd/mm/yy",
        defaultDate: "+1w",
        changeMonth: true,
        minDate: utc,
        numberOfMonths: 1,
        onClose: function (params) {
          var date = $("#from").datepicker("getDate");
          
          if (date){
            date.setDate(date.getDate() + 1);
            $("#to").datepicker("option", "minDate", date);
            this.style = "display: none";
          }
          
          
          document.getElementById("date_display").innerHTML =
            $.datepicker.formatDate(
              "dd M yy",
              $("#from").datepicker("getDate")
            );
          document
            .getElementById("date_display")
            .addEventListener("click", function (params) {
              $("#from").css("display", "inline-block");
            });
        },
      });

      $("#to").datepicker({
        dateFormat: "dd/mm/yy",
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onClose: function () {
          var date = $("#to").datepicker("getDate");
          
          document.getElementById("end_date_display").innerHTML =
            $.datepicker.formatDate("dd M yy", date);
            if($("#to").datepicker("getDate")){
                console.log("object2", $("#to").datepicker("getDate").getDate());
                 $("#to").css("display","none");                    
             }                
            document
            .getElementById("end_date_display")            
            .addEventListener("click", function (params) {
                $("#to").css("display", "inline-block");
                console.log("object", $("#to").datepicker("getDate").getDate());
           
            });
        },
      });

      function getDate(element) {
        var date;
        try {
          date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
          date = null;
        }

        return date;
      }
    });

    
  });

  var i = 0;
  function contadormas(iddeinput){ 
      var cant = document.getElementById(iddeinput); 
      if(cant.value>=1){
          i = cant.value;
      }else{
          if(cant.value == "0"){i = 0;}
      }
      i++; 
      cant.value = i;
  }
  function contadormenos(iddeinput){
      var cant = document.getElementById(iddeinput); 
      if(cant.value>1){
          i = cant.value;
          i--;
          cant.value = i;
      }else{
          cant.value="0";
      }
  }

  function enviar(){
    localStorage.stringstartDate=document.getElementById("from").value;
    localStorage.stringendDate=document.getElementById("to").value;
    localStorage.Adult=document.getElementById("cantidad1").value;
    localStorage.children=document.getElementById("cantidad2").value;
    localStorage.baby=document.getElementById("cantidad3").value;
  }

  /* function ValidarFechas(stringstartDate, stringendDate) {
   
        Validador = { Estado: true, Mensaje: '' };
    
        if (stringstartDate == "") {
            alert("Debe seleccionar una fecha de entrada.");
    
        }
    
        if (stringendDate == "") {
            alert("Debe seleccionar una fecha de salida.");
    
        }
    
        var datestartDate = stringstartDate;
        var dateendDate = stringendDate;
    
        if (datestartDate > dateendDate) {
            alert("La fecha de salida no puede ser menor a la de entrada.");
        }
} */
  



