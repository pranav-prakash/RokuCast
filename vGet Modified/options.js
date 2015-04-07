$(document).ready(function()
{

    var max_fields      = 1; //maximum input boxes allowed

    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    var save_button     = $(".save_button"); //Add button ID

    var numTextBoxes = (localStorage["numTextBoxes"] == undefined) ? 0 : localStorage["numTextBoxes"];
    localStorage["numTextBoxes"] = numTextBoxes;

    for (var i = 1; i <= numTextBoxes; i++)
    {
        if (localStorage["textBox" + i] != undefined)
        {
            $(wrapper).append('<div><input type="text" value="' + localStorage["textBox" + i] + '" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    };

    
    $(add_button).click(function(e) //on add input button click
    {
        e.preventDefault();
        if(numTextBoxes < max_fields) //max input box allowed
        {
            numTextBoxes++; //text box increment
            localStorage["numTextBoxes"] = numTextBoxes;
            $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(save_button).click(function(e) //on add input button click
    {
        e.preventDefault();

        var i = 1;
        $('div input[type="text"]').each(function()
        {
            localStorage["textBox" + i] = this.value;
            i++;
        });

        alert('Saved!');

    });
    
    $(wrapper).on("click",".remove_field", function(e) //user click on remove text
    { 
        e.preventDefault(); $(this).parent('div').remove();
        numTextBoxes--;
        localStorage["numTextBoxes"] = numTextBoxes;
    })
});

