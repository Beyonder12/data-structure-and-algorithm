// activityFactor = 1.2 || 1.3 || 1.4
// almost never do workout : 1.2
// low intensity do workout : 1.3
// almost do workout or high activity : 1.4

function bmr(gender, bodyMass, height, age, activityFactor = 1.2) {
    if(gender == 0) {
        return "Your male body need calories at rest condition : " + (66.5 + (13.7 * bodyMass) + (5 * height) - (6.8 * age)) * activityFactor;
    } else if (gender == 1) {
        return "Your female body need calories at rest condition : " + (655 + (9.6 * bodyMass) + (1.8 * height) - (4.7 * age)) * activityFactor;
    } else {
        return "gender only 0 for male or 1 for female";
    }
}

console.log();
console.log(bmr(0, 78, 170, 27, 1.2));
console.log(bmr(1, 78, 170, 27));
console.log();

function caloriesNeededByAge(gender, age) {
    if(gender == 0) {
        if(age >=10 && age <= 12) {
            return "Your male body needs calories for age " + age + " is 2000";
        } else if(age >=13 && age <= 15) {
            return "Your male body needs calories for age " + age + " is 2400";
        } else if (age >=16 && age <= 18) {
            return "Your male body needs calories for age " + age + " is 2650";
        } else if (age >=19 && age <= 29){
            return "Your male body needs calories for age " + age + " is 2650";
        } else if (age >=30 && age <= 49){
            return "Your male body needs calories for age " + age + " is 2550";
        } else if (age >=50 && age <= 64){
            return "Your male body needs calories for age " + age + " is 2150";
        } else if (age >=65 && age <= 80) {
            return "Your male body needs calories for age " + age + " is 1800";
        } else if (age >80) {
            return "Your male body needs calories for age " + age + " is 1600";
        } else {
            return "wrong input!"
        }
    } else if (gender == 1) {
        if(age >=10 && age <= 12) {
            return "Your female body needs calories for age " + age + " is 1900";
        } else if(age >=13 && age <= 15) {
            return "Your female body needs calories for age " + age + " is 2050";
        } else if (age >=16 && age <= 18) {
            return "Your female body needs calories for age " + age + " is 2100";
        } else if (age >=19 && age <= 29){
            return "Your female body needs calories for age " + age + " is 2250";
        } else if (age >=30 && age <= 49){
            return "Your female body needs calories for age " + age + " is 2150";
        } else if (age >=50 && age <= 64){
            return "Your female body needs calories for age " + age + " is 1800";
        } else if (age >=65 && age <= 80) {
            return "Your female body needs calories for age " + age + " is 1550";
        } else if (age >80) {
            return "Your female body needs calories for age " + age + " is 1400";
        } else {
            return "wrong input!"
        }
    } else {
        return "gender only 0 for male or 1 for female";
    }
}

console.log();
console.log(caloriesNeededByAge(0, 27));
console.log(caloriesNeededByAge(1, 27));
console.log();