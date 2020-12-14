/*
 
5
amy 100
david 100
heraldo 50
aakansha 75
aleksa 150

aleksa 150
amy 100
david 100
aakansha 75
heraldo 50

 */



import java.util.*;

class Checker implements Comparator<Player>{
    @Override //in OOP it is a feature that allows a subclass or child class to provide a specific implementation of a method that is already in parent class
    public int compare(Player a, Player b) {
        if(a.score == b.score) {
            return a.name.compareTo(b.name);//alphabetically
        } else {
            return b.score - a.score;//decreasing
        }
    }
}

class Player{
    String name;
    int score;

    Player(String name, int score){
        this.name = name;
        this.score = score;
    }
}

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();

        Player[] player = new Player[n];
        Checker checker = new Checker();

        for(int i=0; i < n; i ++) {
            player[i] = new Player(scan.next(), scan.nextInt());
        }
        scan.close();

        Arrays.sort(player, checker);
        for(int i =0; i < player.length; i++) {
            System.out.printf("%s %s\n", player[i].name, player[i].score);
        }
    }
    
}
