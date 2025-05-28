import { APIRequestContext } from '@playwright/test';
import SerializeDeserialize from '../apiUtils/SerializeDeserialize';
import StringBuilder from '../../utils/StringBuilder';

export default abstract class BaseClient {
  protected static apiURL: string = process.env.API_URL as string;
  protected static requestContext: APIRequestContext;
  protected readonly serializeDeserialize: SerializeDeserialize;
  protected readonly stringBuilder: StringBuilder;

  constructor() {
    this.serializeDeserialize = new SerializeDeserialize();
    this.stringBuilder = new StringBuilder();
  }
}
