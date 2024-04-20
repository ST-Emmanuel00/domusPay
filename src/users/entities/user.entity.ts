import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class User extends Document {

    // private id: string
    @Prop({
        index: true,
        required: true
    })
    private name: string

    @Prop({
        unique: true,
        index: true,
        required: true

    })
    private docNumber: string

    @Prop({
        required: true
    })
    private age: number
}

export const UserShema = SchemaFactory.createForClass(User)
