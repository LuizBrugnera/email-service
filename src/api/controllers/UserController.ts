import { Request, Response } from "express";
import { handleControllerError } from "../util/global";
import UserService from "../services/UserService";

export default class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async create(req: Request, res: Response) {
    try {
      const user = await this.userService.create(req.body);
      res.status(201).json(user);
    } catch (error: unknown) {
      handleControllerError(400, error, res);
    }
  }

  public async findById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.findById(id);
      res.json(user);
    } catch (error: unknown) {
      handleControllerError(404, error, res);
    }
  }

  public async findAll(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll();
      res.json(users);
    } catch (error: unknown) {
      res.status(500).json({ message: error });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const updatedUser = await this.userService.update(id, req.body);
      res.json(updatedUser);
    } catch (error: any) {
      handleControllerError(400, error, res);
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await this.userService.delete(id);
      res.status(204).end();
    } catch (error: any) {
      handleControllerError(404, error, res);
    }
  }
}
