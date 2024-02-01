import { IInputCreateFooDto } from '@business/dtos/foo/create'
import { IsNotEmpty, IsString } from 'class-validator'
import { AbstractSerializer } from '../abstractSerializer'

export class InputCreateFoo extends AbstractSerializer<IInputCreateFooDto> {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  content: string
}
