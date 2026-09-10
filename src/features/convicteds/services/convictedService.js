import { apiService } from '@/shared/infrastructure/http/apiService'

class ConvictedService {
  list({ search, page = 1, limit = 25 }) {
    // Paginação começa a partir da posição 0 na API
    page = page - 1

    const params = new URLSearchParams({
      page: String(page),
      size: String(limit),
    })

    if (search?.trim()) {
      params.set('search', search.trim())
    }

    return apiService.get(`/convicted?${params.toString()}`)
  }
}

export const convictedService = new ConvictedService()
