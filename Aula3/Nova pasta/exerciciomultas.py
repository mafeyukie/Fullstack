velocidadedavia = float (input("Digite o velocidade da via"))
velocidadedocarro = float (input("Digite a velocidade do carro"))

(velocidadedocarro - velocidadedavia) / velocidadedavia * 100
porcentagem = ((velocidadedocarro - velocidadedavia) / velocidadedavia * 100)

if velocidadedavia <=100 and velocidadedocarro >=120:
    print ("voce esta acima do limite da infração média")
    print ("Penalidade multa de R$ 130,16")
    print ("Pontuação: 4 pontos na CNH.")

elif velocidadedavia >=100 and velocidadedocarro <=140:
    print ("voce esta acima do limite da infracao grave")
    print ("Penalidade: Multa de R$ 195,23.")
    print ("Pontuação: 5 pontos na CNH.")

elif velocidadedavia >=100 and velocidadedocarro >=180:
    print ("voce esta acima do limite da infracao gravissima")
    print ("Penalidade: Multa de R$ 880,41.")
    print ("Pontuação: 7 pontos na CNH.")





