import { JsonController, Get} from 'routing-controllers'
import Flashcard from './entity'

@JsonController()
export default class TicketController {


    @Get('/flashcards')
    async allFlashcards() {
        const flashcard = await Flashcard.find()
        return { flashcard }
    }
}



