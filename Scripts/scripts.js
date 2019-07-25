// Creating the image_tracker variable / if and else if statements for button1 //
var image_tracker ='1';
function change() {
    var image = document.getElementById('BlackTest');
        if (image_tracker =='1')  {
            image.src = 'images/Pancakes.jpg';
            image_tracker ='4';
         
            var text = document.getElementById('WordTest1');
                text.innerHTML = "Bear enjoyed his pancakes very much. He would like to play with his friend Dog today. What should they do?";

            var button1 = document.getElementById('button1');
                button1.innerHTML = "Bear and Dog should play with blocks.";

            var button2 = document.getElementById('button2');
                button2.innerHTML = "Bear and Dog should play with cars.";
    
            var button3 = document.getElementById('button3');
                button3.innerHTML = "Bear and Dog should color.";

        } else if (image_tracker =='4') {
            image.src = "images/Blocks.jpg";
            image_tracker ='7';

            var text = document.getElementById('WordTest1');
                text.innerHTML = "Bear had a fun day playing blocks with his friend Dog. It is getting late and it is time for bed. What should bear do first to get ready for bed?";

            var button1 = document.getElementById('button1');
                button1.innerHTML = "Bear should brush his teeth."

            var button2 = document.getElementById('button2');
                button2.innerHTML = "Bear take a bath."
    
            var button3 = document.getElementById('button3');
                button3.innerHTML = "Bear should put his lotion on."
    
        } else if (image_tracker =='7') {
                image.src = "images/BrushingTeeth.jpg";
                image_tracker ='8';

            var text = document.getElementById('WordTest1');
                text.innerHTML = "Bear has brushed his teeth and finished getting ready for bed. Now it is time to get tucked in and read a book.";

            var button1 = document.getElementById('button1');
                button1.innerHTML = "Goodnight Bear.";

            var button2 = document.getElementById('button2');
                button2.innerHTML = "Goodnight Bear.";
    
            var button3 = document.getElementById('button3');
                button3.innerHTML = "Goodnight Bear.";

        } else if (image_tracker =='8') {
                image.src = "images/Bedtime.jpg";
        }
}

// if and else if statements for button 2 //
function change2() {
    var image = document.getElementById('BlackTest');
        if (image_tracker =='1')  {
            image.src = 'images/Toast.jpg';
            image_tracker ='4';
         
            var text = document.getElementById('WordTest1');
                text.innerHTML = "Bear enjoyed his toast very much. He would like to play with his friend Dog today. What should they do?";

            var button1 = document.getElementById('button1');
                button1.innerHTML = "Bear and Dog should play with blocks.";

            var button2 = document.getElementById('button2');
                button2.innerHTML = "Bear and Dog should play with cars.";
    
            var button3 = document.getElementById('button3');
                button3.innerHTML = "Bear and Dog should color.";

        } else if (image_tracker =='4') {
            image.src = "images/Cars.jpg";
            image_tracker ='7';

            var text = document.getElementById('WordTest1');
                text.innerHTML = "Bear had a fun day playing cars with his friend Dog. It is getting late and it is time for bed. What should bear do first to get ready for bed?";

            var button1 = document.getElementById('button1');
                button1.innerHTML = "Bear should brush his teeth."

            var button2 = document.getElementById('button2');
                button2.innerHTML = "Bear take a bath."
    
            var button3 = document.getElementById('button3');
                button3.innerHTML = "Bear should put his lotion on."
    
        } else if (image_tracker =='7') {
                image.src = "images/Bathtime.jpg";
                image_tracker ='8';

            var text = document.getElementById('WordTest1');
                text.innerHTML = "Bear has had his bath and finished getting ready for bed. Now it is time to get tucked in and read a book.";

            var button1 = document.getElementById('button1');
                button1.innerHTML = "Goodnight Bear.";

            var button2 = document.getElementById('button2');
                button2.innerHTML = "Goodnight Bear.";
    
            var button3 = document.getElementById('button3');
                button3.innerHTML = "Goodnight Bear.";
        
        } else if (image_tracker =='8') {
            image.src = "images/Bedtime.jpg";
    }
}

// if and else if statements for button 3 //
function change3() {
    var image = document.getElementById('BlackTest');
        if (image_tracker =='1')  {
            image.src = 'images/Cereal.jpg';
            image_tracker ='4';
         
            var text = document.getElementById('WordTest1');
                text.innerHTML = "Bear enjoyed his cereal very much. He would like to play with his friend Dog today. What should they do?";

            var button1 = document.getElementById('button1');
                button1.innerHTML = "Bear and Dog should play with blocks.";

            var button2 = document.getElementById('button2');
                button2.innerHTML = "Bear and Dog should play with cars.";
    
            var button3 = document.getElementById('button3');
                button3.innerHTML = "Bear and Dog should color.";

        } else if (image_tracker =='4') {
            image.src = "images/Coloring.jpg";
            image_tracker ='7';

            var text = document.getElementById('WordTest1');
                text.innerHTML = "Bear had a fun day coloring with his friend Dog. It is getting late and it is time for bed. What should bear do first to get ready for bed?";

            var button1 = document.getElementById('button1');
                button1.innerHTML = "Bear should brush his teeth."

            var button2 = document.getElementById('button2');
                button2.innerHTML = "Bear take a bath."
    
            var button3 = document.getElementById('button3');
                button3.innerHTML = "Bear should put his lotion on."
    
        } else if (image_tracker =='7') {
                image.src = "images/Lotion.jpg";
                image_tracker ='8';

            var text = document.getElementById('WordTest1');
                text.innerHTML = "Bear has lotioned and finished getting ready for bed. Now it is time to get tucked in and read a book.";

            var button1 = document.getElementById('button1');
                button1.innerHTML = "Goodnight Bear.";

            var button2 = document.getElementById('button2');
                button2.innerHTML = "Goodnight Bear.";
    
            var button3 = document.getElementById('button3');
                button3.innerHTML = "Goodnight Bear.";
        } else if (image_tracker =='8') {
            image.src = "images/Bedtime.jpg";
    }
}
