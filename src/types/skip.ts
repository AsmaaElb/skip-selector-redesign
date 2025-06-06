export interface Skip {
  id: number
  size: number
  hire_period_days: number
  price_before_vat: number
  vat: number
  transport_cost?: number | null
  per_tonne_cost?: number | null
  postcode: string
  area: string
  forbidden: boolean
  allowed_on_road: boolean
  created_at: string
  updated_at: string
}
