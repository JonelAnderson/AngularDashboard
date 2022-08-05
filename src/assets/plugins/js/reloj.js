let html = document.getElementById("current_date");

        setInterval(function(){
            date = new Date();

            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            horas = date.getHours();
            minutos = date.getMinutes();
            segundos = date.getSeconds();

            //evitar los 0 o numeros individuales
			day=(day<10)?"0"+day:day
            month=(month<10)?"0"+month:month
			
            if(horas<10)
                horas = "0"+horas;
            if(minutos<10)
                minutos = "0"+minutos;
            if(segundos<10)
                segundos = "0"+segundos;

            html.innerHTML = day+"/"+month+"/"+year +"&nbsp; &nbsp;"+horas+" : "+minutos+" : "+segundos;
        });