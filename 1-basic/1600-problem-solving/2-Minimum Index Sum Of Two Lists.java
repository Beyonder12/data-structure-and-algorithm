/*

Approach: HashMap (Linear)
we make use of a HashMap to solve the given problem in a different way in this approach. 
Firstly, we transverse over the whole list1 and create an entry for each element of list1 in
a HashMap map, of the form (list[i], i). Here, I refers to the index of the ith element, and list[i]
is the ith element itself. Thus, we create a mapping from the elements of list1 to their indices.
Now, we tranverse over list2.
for every element, list2[i], of list2 encountered, we check if the same element
already exists as a key in the map.

*/

class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {
        // Using HashMap to record each element and their indices
        for (int i = 0; i < list1.length; i++) {
            map.put(list1[i], i)
        }

        List<String> rst = new ArrayList<>();
        int minSum = Integer.MAX_VALUE, sum;
        for (int i = 0; i < list2.length; i++) {
            if (map.containsKey(list2[i])) {
                sum = i + map.get(list2[i]);
                // If this is lesser than the minimum sum
                // clear the result list and add the list2[i] into the rst list
                if (sum < minSum) {
                    rst.clear();
                    rst.add(list2[i]);
                    minSum = sum;
                // If the sum is equal to the minimum sum
                // we put an extra entry corresponding to the element list2[i] in the rst list.
                } else if (sum == minSum) {
                    rst.add(list2[i]);
                }
            }
        }

        return rst.toArray(new String[rst.size()])
    }
}