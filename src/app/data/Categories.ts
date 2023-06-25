import { CategoryType } from "../types/CategoryType"

export const categories:CategoryType = {
  education: {title: 'Educação', expense: true},
  food: {title: 'Alimentação', expense: true},
  rent: {title: 'Aluguel', expense: true},
  health: {title: 'Saúde', expense: true},
  laisure: {title: 'Lazer', expense: true},
  transport: {title: 'Transporte', expense: true},
  salary: {title: 'Salário', expense: false}
}