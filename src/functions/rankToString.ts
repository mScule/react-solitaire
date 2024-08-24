import Rank from "../types/Rank";

export default function rankToString(rank: Rank): string {
  switch (rank) {
    case 1:
      return "A";
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return rank.toString();
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
  }
}
