import { Request, Response, NextFunction, Router } from 'express';
import { INote, NoteModel } from './notes.model';
import { ResourceController } from '../../shared';
import { StatusCodes } from 'http-status-codes';
import { Logger } from '../../shared/utils/logger';

export class NoteController extends ResourceController<INote>{
    private logger: Logger = new Logger();
    constructor() {
        super(NoteModel);
    }
    /**
     * Apply all routes for notes
     *
     * @returns {Router}
     */
    public applyRoutes(): Router {
        const router = Router();
        router
            .get('/', this.getNotes)
            .get('/:id', this.getNoteById)
            .post('/', this.postNote)
            .put('/:id', this.updateNote)
            .delete('/:id', this.deleteNote);

        return router;
    }

    /**
     * In all of the methods below, we are using the super class methods to perform the CRUD operations.
     * Request and Response are passed to the super class methods so that they can be extracted and used.
     * In case you need to do any preprocessing (e.g., filter a body's field) you can do it before calling the super class methods.
     */
    /**
     * Sends a message containing all notes back as a response
     * @param req
     * @param res 
     */
    getNotes = async (req: Request, res: Response) => {
        this.logger.debug('getNotes request');
        // you can pre-process the request here before passing it to the super class method
        const allNotes = await this.getAll(req, res);
        // you can process the data retrieved here before returning it to the client
        return res
            .status(StatusCodes.OK)
            .json(allNotes);
    }

    /**
     * Creates a new note
     * @param req
     * @param res
     */

    postNote = async (req: Request, res: Response) => {
        this.logger.debug('postNote request');
        // you can pre-process the request here before passing it to the super class method
        const note = await this.create(req, res);
        // you can process the data retrieved here before returning it to the client
        return res
            .status(StatusCodes.OK)
            .json(note);
    }

    /**
     * Delete note by id
     * @param req 
     * @param res 
     */
    deleteNote = async (req: Request, res: Response) => {
        this.logger.debug('deleteNote request');
        // you can pre-process the request here before passing it to the super class method
        const note = await this.delete(req.params.id, req, res);
        // you can process the data retrieved here before returning it to the client
        return res
            .status(StatusCodes.OK)
            .json(note);

    }

    /**
     * Update note by id
     * @param req 
     * @param res 
     */
    updateNote = async (req: Request, res: Response) => {
        this.logger.debug('updateNote request');
        // you can pre-process the request here before passing it to the super class method
        const note = await this.update(req.params.id, req.body.blacklist, req, res);
        // you can process the data retrieved here before returning it to the client
        return res
            .status(StatusCodes.OK)
            .json(note);
    }

    /**
     * Get single note by id
     * @param req 
     * @param res 
     */
    getNoteById = async (req: Request, res: Response) => {
        this.logger.debug('getNoteById request');
        // you can pre-process the request here before passing it to the super class method
        const note = await this.getOne(req.params.id, req, res);

        // you can process the data retrieved here before returning it to the client
        return res
            .status(StatusCodes.OK)
            .json(note);
    }
}
