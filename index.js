function update_heading_and_imputLabel_as_unit2() {
    var heading_unit1 = document.getElementById('heading-unit1');
    var select_unit1 = document.getElementById('unit-1');
    var option_unit1 = select_unit1.options[select_unit1.selectedIndex];
    document.getElementById('imput_label').innerHTML = option_unit1.text;
    heading_unit1.innerHTML = option_unit1.text;
    document.getElementById('imput_number_base').innerHTML = option_unit1.value;
}


function update_heading_as_unit2() {
    var heading_unit2 = document.getElementById('heading-unit2');
    var select_unit2 = document.getElementById('unit-2');
    var option_unit2 = select_unit2.options[select_unit2.selectedIndex];
    heading_unit2.innerHTML = option_unit2.text;
}


function convert_btn() {
    // newPageTitle = 'title changed!';
    var number_output_container = document.getElementById('number-output');
    var imputed_number = document.getElementById('number-imput').value;
    var select_unit1 = document.getElementById('unit-1');
    var option_unit1 = select_unit1.options[select_unit1.selectedIndex];
    var select_unit2 = document.getElementById('unit-2');
    var option_unit2 = select_unit2.options[select_unit2.selectedIndex];
    document.querySelector('title').textContent = option_unit1.text + ' to ' + option_unit2.text + ' Conversion';



    function unit2_value() {
        /*------The following line is to rename the output level.-----*/
        document.getElementById('selected_name_unit-2').innerHTML = option_unit2.text;
        document.getElementById('output_number_base').innerHTML = option_unit2.value;

    }

    if (option_unit1.text === 'Decimal') {
        unit2_value();
        number_output_container.innerHTML = convert_Dacimal_to_nonDecimal(imputed_number, option_unit2.value);
    } else if (option_unit1.text === 'Binary') {
        unit2_value()
        convert_nonDecimal_to_Decimal(imputed_number, option_unit1.value);
        var Binary_to_decimal_converted_number = convert_nonDecimal_to_Decimal(imputed_number, option_unit1.value);
        number_output_container.innerHTML = convert_Dacimal_to_nonDecimal(Binary_to_decimal_converted_number, option_unit2.value);
    } else if (option_unit1.text === 'Octal') {
        unit2_value()
        convert_nonDecimal_to_Decimal(imputed_number, option_unit1.value);
        var Binary_to_Octal_converted_number = convert_nonDecimal_to_Decimal(imputed_number, option_unit1.value);
        number_output_container.innerHTML = convert_Dacimal_to_nonDecimal(Binary_to_Octal_converted_number, option_unit2.value);
    } else if (option_unit1.text === 'Hexadecimal') {
        unit2_value()
        convert_nonDecimal_to_Decimal(imputed_number, option_unit1.value);
        var Binary_to_Hexadecimal_converted_number = convert_nonDecimal_to_Decimal(imputed_number, option_unit1.value);
        number_output_container.innerHTML = convert_Dacimal_to_nonDecimal(Binary_to_Hexadecimal_converted_number, option_unit2.value);
    } else {
        console.log('false');

    }

}


function reset_btn() {
    var imputed_number = document.getElementById('number-imput');
    var number_output_container = document.getElementById('number-output');
    imputed_number.value = '';
    number_output_container.innerHTML = '';
}


/*--------------The following are the formulas.-------------*/

function convert_nonDecimal_to_Decimal(value, base) {
    var [integer, fraction = ''] = value.toString().split('.');

    return parseInt(integer, base) + (integer[0] !== '-' || -1) * fraction.split('').reduceRight((r, a) => (r + parseInt(a, base)) / base, 0);
}
// console.log(convert_nonDecimal_to_Decimal('32352acdf.5', 16));


function convert_Dacimal_to_nonDecimal(value, base) {
    // console.log(Number(value).toString(base));
    return Number(value).toString(base);
}