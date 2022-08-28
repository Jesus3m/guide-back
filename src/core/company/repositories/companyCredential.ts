export interface CompanyCredentialsRepository {
    saveApiKeys: (companyId: string) => Promise<any>
}
