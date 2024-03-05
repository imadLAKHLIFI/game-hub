import {
  Image,
  List,
  ListItem,
  HStack,
  Text,
  Spinner,
  Link,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageUrl from "../Services/CropImage";

interface Props{
  onSelectGenre: (genre:Genre) => void;
}
const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  const Skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
