<?php
header("Content-Type: application/json");
require_once("../conexao.php");

$data = json_decode(file_get_contents("php://input"), true);

$c0 = $data["c0"];
$k = $data["k"];
$tempo = $data["tempo"];

$stmt = $conexao->prepare("INSERT INTO simulacoes (concentracao_inicial, constante_k, tempo_total) VALUES (?, ?, ?)");
$stmt->bind_param("ddi", $c0, $k, $tempo);
$stmt->execute();

echo json_encode(["status" => "ok", "id" => $stmt->insert_id]);
?>