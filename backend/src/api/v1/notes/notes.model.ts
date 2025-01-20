import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from '../../../models/shared';

// ------------------------------------------
// Interface declaration
export interface INote extends Document {
  category: string;
  title: string;
  context: string;
  color?: string; // Virtual πεδίο
  pin: Boolean;
}

// ------------------------------------------
// Schema definition
const noteSchema = new Schema<INote>(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    context: { type: String, required: true },
    pin: { type: Boolean, required: true },
  },
  { ...DefaultSchemaOptions, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual field για το χρώμα
noteSchema.virtual('color').get(function () {
  const categoryColors: { [key: string]: string } = {
    Work: '#f8d7da',
    Personal: '#d4edda',
    'Project A': '#cce5ff',
  };

  return categoryColors[this.category] || '#ffffff';
});

// ------------------------------------------
// Schema model exports
export const NoteModel: Model<INote> = model<INote>('Note', noteSchema, 'Note');
