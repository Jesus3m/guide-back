export interface CompanyEntity {
    id: string
    name: string
    nit: string
    address: string
    phone: string
}

export interface CompanyDBCredentials {
    host: string
    password: string
    user: string
}
