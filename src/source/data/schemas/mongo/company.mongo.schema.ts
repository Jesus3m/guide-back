import { CompanyEntity } from '@core/company/company.entity'
import mongoose from 'mongoose'

export const CompanySchema = new mongoose.Schema<CompanyEntity>({
    name: String,
    phone: String,
    nit: String,
    address: String
})
