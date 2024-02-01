import { Request, Response } from "express";
import { handleControllerError } from "../util/global";
import EmailAccountService from "../services/EmailAccountService";

export default class EmailAccountController {
  private readonly emailAccountService: EmailAccountService;

  constructor() {
    this.emailAccountService = new EmailAccountService();
  }

  public async create(req: Request, res: Response) {
    try {
      const emailAccount = await this.emailAccountService.create(req.body);
      res.status(201).json(emailAccount);
    } catch (error: unknown) {
      handleControllerError(400, error, res);
    }
  }

  public async findById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const emailAccount = await this.emailAccountService.findById(id);
      res.json(emailAccount);
    } catch (error: unknown) {
      handleControllerError(404, error, res);
    }
  }

  public async findAll(req: Request, res: Response) {
    try {
      const emailAccounts = await this.emailAccountService.findAll();
      res.json(emailAccounts);
    } catch (error: unknown) {
      res.status(500).json({ message: error });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const updatedEmailAccount = await this.emailAccountService.update(
        id,
        req.body
      );
      res.json(updatedEmailAccount);
    } catch (error: any) {
      handleControllerError(400, error, res);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await this.emailAccountService.delete(id);
      res.status(204).end();
    } catch (error: any) {
      handleControllerError(404, error, res);
    }
  }
}
