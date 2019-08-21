export default class BMI {

  calculate(weight,height){
    return weight/height**2;
  }

  calculate2(bmi,region){
    if(region == 'asia'){
      if(bmi <= 18.5){
        return 'Under weight';
      } else if(bmi <= 24.9){
        return 'Normal weight';
      } else if(bmi <= 29.9){
        return 'Overweight';
      } else if(bmi > 29.9){
        return 'Obesity';
      }

    } else if(region == 'western'){
      if(bmi < 28.5){
        return 'Under weight';
      } else if(bmi <= 34.9){
        return 'Normal weight';
      } else if(bmi <= 39.9){
        return 'Overweight';
      } else if(bmi > 39.9){
        return 'Obesity';
      }
    }

  }

}