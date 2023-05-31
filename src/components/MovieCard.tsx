import React from "react"
import { Card, CardHeader, CardBody, CardFooter, Text, Stack, HStack, VStack, Image, Box, Flex, Center } from '@chakra-ui/react'
import { Movie } from "../lib/types/movies"

interface MovieCardProps {
    movie: Movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
<Card >
<VStack  spacing='4' >
{/* <Center> */}

        <CardHeader>
            {movie.Year}
        </CardHeader>
    

    <CardBody >
        <Image h='50vh' borderRadius='lg' src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
    </CardBody>
    <CardFooter>
        <VStack>
        <Text textTransform='uppercase'>{movie.Type}</Text>
        <Text noOfLines={2} 
         >{movie.Title} 
        
  </Text>
        </VStack>
    </CardFooter>
    
    {/* </Center> */}
    </VStack>
    
</Card>
    )
}

export default MovieCard 