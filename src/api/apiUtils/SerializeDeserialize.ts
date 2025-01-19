import { Serializable } from 'child_process';
import { instanceToPlain, plainToInstance } from 'class-transformer';

export default class SerializeDeserialize {
  constructor() {}

  async deserialize<T>(classType: new () => T, responseJSON: Promise<Serializable>): Promise<T> {
    return plainToInstance(classType, responseJSON);
  }

  async serialize<T>(instance: T): Promise<Serializable> {
    return instanceToPlain(instance);
  }
}
