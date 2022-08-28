import { CompanyEntity } from './company.entity'
import { nanoid } from 'nanoid'
import * as yup from 'yup'
import { HttpError } from '@common/errors/Base'

export class Company implements CompanyEntity {
    readonly id: string = ''
    name: string = ''
    nit: string = ''
    address: string = ''
    phone: string = ''

    constructor (company: CompanyEntity) {
        this.id = nanoid()
        this.name = company.name
        this.nit = company.nit
        this.phone = company.phone
        this.address = company.address
        this.validate()
    }

    private validate () {
        try {
            const schema = yup.object().shape({
                name: yup.string().required('name is required'),
                nit: yup.string(),
                phone: yup.string(),
                address: yup.string()
            })

            schema.validateSync({
                name: this.name,
                nit: this.nit,
                phone: this.phone,
                address: this.address
            })
            return this
        } catch (error) {
            const _err = error as yup.ValidationError
            throw new HttpError(_err.message, 400)
        }
    }
}
