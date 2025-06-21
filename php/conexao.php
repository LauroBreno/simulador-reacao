<?php
$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "simulador_reacoes";

$conexao = new mysqli($host, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro de conexão: " . $conexao->connect_error);
}
?>