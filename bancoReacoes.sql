CREATE DATABASE simulador_reacoes;

USE simulador_reacoes;

CREATE TABLE simulacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    concentracao_inicial FLOAT,
    constante_k FLOAT,
    tempo_total INT,
    data_simulacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);