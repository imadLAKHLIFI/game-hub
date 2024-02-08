import React, { useEffect, useState } from "react";
import ApiClient from "../Services/Api-client";
import { Text, layout } from "@chakra-ui/react";
interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    ApiClient.get<FetchGamesResponse>("/games")
      .then((res) => setGame(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
      {game.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul></>
  );
};

export default GameGrid;
