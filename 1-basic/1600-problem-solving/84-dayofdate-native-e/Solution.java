class Solution {

  public static void main(String[] args) {
    System.out.println(dayOfTheWeek(27, 9, 100));
  }
  public static String dayOfTheWeek(int day, int month, int year) {
    int months[] = {0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334};
    int sumOfDays = 0; //sum of days
    int yearOfFirstMachine = 1971;

    while(year > yearOfFirstMachine) {
      sumOfDays += 365;
      if(yearOfFirstMachine % 4 == 0 && yearOfFirstMachine%100 != 0 || yearOfFirstMachine%400 ==0) {
        sumOfDays++;
      }
      yearOfFirstMachine++;
    }
    sumOfDays += months[month - 1] + day;
    if(month > 2 && (yearOfFirstMachine % 4 == 0 && yearOfFirstMachine % 100 != 0 || yearOfFirstMachine % 400 == 0)) {
      sumOfDays++;
    }
    switch(sumOfDays % 7) {
      case(0):
      return "Thursday";
      case(1):
      return "Friday";
      case(2):
      return "Saturday";
      case(3):
      return "Sunday";
      case(4):
      return "Monday";
      case(5):
      return "Tuesday";
      case(6):
      return "Wednesday";
    }
    return "";
  }
}
