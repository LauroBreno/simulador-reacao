<?php
header("Content-Type: application/json");
require_once("../conexao.php");

$resultado = $conexao->query("SELECT * FROM simulacoes ORDER BY data_simulacao DESC LIMIT 10");
$dados = [];

while ($linha = $resultado->fetch_assoc()) {
    $dados[] = $linha;
}

echo json_encode($dados);
?>