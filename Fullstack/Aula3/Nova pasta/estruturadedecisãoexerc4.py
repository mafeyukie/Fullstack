anoN = int (input("Digite o ano de nascimento"))
anoA = int(input("Digite o ano atual"))
idade = int (input("Digite sua idade"))

idade = anoN - anoA 

if idade >=16 and idade >=18:
    print ("Voce ja tem idade para votar e dirigir!")

elif idade <=17:
    print ("Voce ja pode tirar carteira de habilitacao!")

