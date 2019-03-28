import { JsonController, Get} from 'routing-controllers'
import Flashcard from './entity'

@JsonController()
export default class FlashcardController {


    @Get('/flashcards')
    async allFlashcards() {
        const flashcard = await Flashcard.find()
        return { flashcard }
    }
}



