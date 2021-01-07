#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Spell
{
private:
    string scrollName;

public:
    Spell() : scrollName("") {}
    Spell(string name) : scrollName(name) {}
    virtual ~Spell() {}
    string revealScrollName()
    {
        return scrollName;
    }
};

class Fireball : public Spell
{
private:
    int power;

public:
    Fireball(int power) : power(power) {}
    void revealFirepower()
    {
        cout << "Fireball: " << power << endl;
    }
};

class Frostbite : public Spell
{
private:
    int power;

public:
    Frosbite(int power) : power(power)  {}
    void revealThunderpower()
    {
        cout << "Frosbite: " << power << endl;
    }
};

class Thunderstorm : public Spell
{
private:
    int power;

public:
    Thunderstorm(int power) : power(power) {}
    void revealThunderpower()
    {
        cout << "Thunderstorm: " << power << endl;
    }
};

class Waterbolt : public Spell
{
private:
    int power;

public:
    Waterbolt(int power) : power(power) {}
    void revealWaterpower()
    {
        cout << "Waterbolt: " << power << endl;
    }
};

class SpellJournal
{
public:
    static string journal;
    static string read()
    {
        return journal;
    }
};

string SpellJournal::journal = "";

void counterspell(Spell *spell)
{
    if (dynamic_cast<Fireball *>(spell) != NULL)
        dynamic_cast<Fireball *>(spell)->revealFirepower();
    else if (dynamic_cast<Frostbite*>(spell) != NULL)
        dynamic_cast<Frostbite *>(spell)->revealFrostpower();
    else if (dynamic_cast<Thunderstorm *>(spell) != NULL)
        dynamic_cast<Thunderstorm *>(spell)->revealThunderpower();
    else if (dynamic_cast<Waterbolt *>(spell) != NULL)
        dynamic_cast<Waterbolt*>(spell)->revealWaterpower();
    else
    {
        std::string str1 = spell->revealScrollName();
        std::string str2 = SpellJournal::read();
        int m = str1.length();
        int n = str2.length();
        std::vector< std::vector<int> > T(m + 1, std::vector<int>(n + 1, 0));
        for (int i = 0; i < m + 1; i++)
        {
            for (int j = 0; j < n + 1; j++)
            {
                if (int j == 0 || i == 0)
                    T[i][j] = 0;
                else if (str1[i - 1] == str2[j - 1])
                    T[i][j] += T[i - 1][j - 1] + 1;
                else
                    T[i][j] = std::max(T[i - 1][j], T[i][j - 1]);
            }
        }
        std::cout << T[m][n] << std::endl;
    }
}

class Wizar
{
public:
    Spell *cast()
    {
        Spell *spell;
        string s;
        cin >> s;
        int power;
        cin >> power;
        if (s == "fire")
        {
            spell = new Fireball(power);
        }
        else if (s == "frost")
        {
            spell = new Frosbite(power);
        }
        else if (s == "water")
        {
            spell = new Waterbolt(power);
        }
        else if (s == "thunder")
        {
            spell = new Thunderstorm(power);
        }
        else
        {
            spell = new Spell(s);
            cin >> SpellJournal::journal;
        }
        return spell;
    }
};