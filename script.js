// + '\n' + '1.weight (in lbs) and Height (in inch)' + '\n' + ' 2.weight(in kg) and height(in metre)'





function calc() {
    let num = parseInt(document.getElementById('in').value)
        // console.log(num);
    switch (num) {
        case 1:
            let weight = parseFloat(document.getElementById('weight').value)
            let height = parseFloat(document.getElementById('hieght').value)
            let w = weight * 703
            let h = height * height
            let BMI = weight / h
                // console.log('BMI=' + BMI);
            document.getElementById('out').value = BMI
            if (BMI <= 18.4) {
                // console.log('Under weight');
                document.getElementById('out1').value = 'Under Weight'
            } else if (BMI >= 18.5 && BMI <= 24.9) {
                // console.log('Normal weight');
                document.getElementById('out1').value = 'Normal Weight'
            } else if (BMI >= 25 && BMI <= 29.9) {
                // console.log('Over weight');
                document.getElementById('out1').value = 'Over weight'
            } else if (BMI >= 30 && BMI <= 34.9) {
                // console.log('Obesity-class 1');
                document.getElementById('out1').value = 'Obesity-class 1'
            } else if (BMI >= 35 && BMI <= 39.9) {
                // console.log('Obesity-class 2');
                document.getElementById('out1').value = 'Obesity-class 2'
            } else if (BMI >= 40) {
                // console.log('Obesity-class 3');
                document.getElementById('out1').value = 'Obesity-class 3'
            }
            break;
        case 2:
            let weight1 = parseFloat(document.getElementById('weight').value)
            let height1 = parseFloat(document.getElementById('hieght').value)
            let h1 = height1 * height1
            let BMI1 = weight1 / h1
                // console.log('BMI=' + BMI1);
            document.getElementById('out').value = BMI1
            if (BMI1 <= 18.4) {
                // console.log('Under weight');
                document.getElementById('out1').value = 'Under Weight'
            } else if (BMI1 >= 18.5 && BMI1 <= 24.9) {
                // console.log('Normal weight');
                document.getElementById('out1').value = 'Normal Weight'
            } else if (BMI1 >= 25 && BMI1 <= 29.9) {
                // console.log('Over weight');
                document.getElementById('out1').value = 'Over weight'
            } else if (BMI1 >= 30 && BMI1 <= 34.9) {
                // console.log('Obesity-class 1');
                document.getElementById('out1').value = 'Obesity-class 1'
            } else if (BMI1 >= 35 && BMI1 <= 39.9) {
                // console.log('Obesity-class 2');
                document.getElementById('out1').value = 'Obesity-class 2'
            } else if (BMI1 >= 40) {
                // console.log('Obesity-class 3');
                document.getElementById('out1').value = 'Obesity-class 3'
            }
            break;

    }
}