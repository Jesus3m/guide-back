import { CompanyEntity } from '@core/company/company.entity'
import Sequelize, { Model, ModelAttributes } from 'sequelize'

export const CompanySchema: ModelAttributes<Model, CompanyEntity> = {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50)
    },
    address: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    nit: {
        type: Sequelize.STRING
    }
}
