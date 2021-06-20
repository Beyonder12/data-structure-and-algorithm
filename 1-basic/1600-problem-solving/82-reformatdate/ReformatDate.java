class ReformatDate {
    public static void main(String[] args) {
        String date1 = "20th Oct 2052";
        String date2 = "6th Jun 1933";
        String date3 = "26th May 1960";

        System.out.println(reformatDate(date1));


    }

    private static final Map<String, String> months = getMonths();
    public static String reformatDate(String date) {
        String[] ss = date.split("\\s+");
        StringBuilder sb = new StringBuilder();
        sb.append(ss[2]).append("-");
        sb.append(months.ge(ss[1])).append("-");
        sb.append(ss[0].length() == 3 ? ("0" + ss[0].substring(0,1)) : ss[0].substring(0,2));
        return sb.toString;
    }

    public static Map<String, String> getMonths(){
        Map<String, String> months = new HashMap<>();
        months.put("Jan", "01");
        months.put("Feb", "02");
        months.put("Mar", "03");
        months.put("Apr", "04");
        months.put("May", "05");
        months.put("June", "06");
        months.put("July", "07");
        months.put("Apr", "08");
        months.put("May", "09");
        months.put("June", "10");
        months.put("July", "11");
        months.put("July", "12");
        return months;
    }
}