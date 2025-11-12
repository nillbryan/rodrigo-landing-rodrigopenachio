# API Contracts - Rodrigo Penachio Landing Page

## Overview
This document outlines the API contracts for the Rodrigo Penachio investment consulting landing page. It details what data is currently mocked, what needs backend implementation, and how frontend-backend integration will work.

## Current Mock Data Location
All mock data is stored in `/app/frontend/src/data/mock.js`

---

## API Endpoints to Implement

### 1. Lead Capture Endpoint
**Purpose**: Capture and qualify leads from the contact form

**Endpoint**: `POST /api/leads`

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (required)",
  "city": "string (required)",
  "objective": "string (required) - values: aposentadoria | renda-mensal | crescimento | protecao-cambial",
  "patrimony": "string (required) - values: <10k | 10-50k | 50-200k | 200k-1M | >1M",
  "experience": "string (required) - values: iniciante | intermediario | avancado",
  "international": "string (required) - values: Sim | Não",
  "crypto": "string (required) - values: Sim | Não",
  "consent": "boolean (required, must be true)"
}
```

**Response Success (201)**:
```json
{
  "success": true,
  "message": "Lead captured successfully",
  "leadId": "unique-lead-id",
  "calendlyLink": "https://calendly.com/rodrigopenachio"
}
```

**Response Error (400)**:
```json
{
  "success": false,
  "message": "Validation error",
  "errors": {
    "email": "Invalid email format",
    "consent": "Consent is required"
  }
}
```

**Database Schema**:
```python
class Lead(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    city: str
    objective: str
    patrimony: str
    experience: str
    international: str
    crypto: str
    consent: bool
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"  # new | contacted | qualified | converted
```

**Business Logic**:
1. Validate all required fields
2. Validate email format
3. Check if email already exists (optional: prevent duplicates or update existing)
4. Store lead in MongoDB
5. Trigger email notification to admin
6. Send confirmation email to lead (optional)
7. Return success with Calendly link

---

### 2. Newsletter Subscription (Optional)
**Purpose**: Simple email capture for newsletter/updates

**Endpoint**: `POST /api/newsletter`

**Request Body**:
```json
{
  "email": "string (required, valid email)",
  "source": "string (optional) - e.g., 'hero', 'footer', 'final-cta'"
}
```

**Response Success (201)**:
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

---

### 3. Contact Information Endpoint (Optional)
**Purpose**: Return dynamic contact info and site configuration

**Endpoint**: `GET /api/config`

**Response**:
```json
{
  "name": "Rodrigo Penachio",
  "title": "Consultoria de Investimentos",
  "email": "contato@rodrigopenachio.com",
  "phone": "+55 11 99999-9999",
  "calendly": "https://calendly.com/rodrigopenachio",
  "socialMedia": {
    "linkedin": "https://linkedin.com/in/rodrigopenachio",
    "instagram": "https://instagram.com/rodrigopenachio"
  }
}
```

---

## Frontend Integration Steps

### Step 1: Create API Service
Create `/app/frontend/src/services/api.js`:
```javascript
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const submitLead = async (formData) => {
  try {
    const response = await axios.post(`${API}/leads`, formData);
    return { success: true, data: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data || 'An error occurred' 
    };
  }
};

export const subscribeNewsletter = async (email, source) => {
  try {
    const response = await axios.post(`${API}/newsletter`, { email, source });
    return { success: true, data: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data || 'An error occurred' 
    };
  }
};

export const getConfig = async () => {
  try {
    const response = await axios.get(`${API}/config`);
    return { success: true, data: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data || 'An error occurred' 
    };
  }
};
```

### Step 2: Update LeadForm Component
In `/app/frontend/src/components/LeadForm.jsx`:
- Import `submitLead` from api service
- Replace mock submission with actual API call:
  ```javascript
  const { success, data, error } = await submitLead(formData);
  if (success) {
    setIsSubmitted(true);
    // Optional: redirect to Calendly
    // window.location.href = data.calendlyLink;
  } else {
    // Handle error
    setErrors(error.errors || { general: error.message });
  }
  ```

### Step 3: Remove Mock Data (Post-Integration)
After backend is working:
1. Remove mock import from components
2. Fetch dynamic data from API
3. Keep mock.js for development/testing only

---

## Email Notifications (Optional)

### Admin Notification Email
**Trigger**: When new lead is captured
**To**: Admin email (from config)
**Subject**: "Nova Lead: [Name]"
**Content**:
```
Nova solicitação de consultoria recebida:

Nome: [name]
Email: [email]
WhatsApp: [phone]
Cidade: [city]

Objetivo: [objective]
Patrimônio: [patrimony]
Experiência: [experience]
Exposição Internacional: [international]
Exposição Cripto: [crypto]

Data: [created_at]
```

### Lead Confirmation Email
**Trigger**: When new lead is captured
**To**: Lead email
**Subject**: "Obrigado pelo interesse - Próximos Passos"
**Content**:
```
Olá [name],

Obrigado por seu interesse na Consultoria de Investimentos Rodrigo Penachio.

Recebemos sua solicitação e entraremos em contato em até 24 horas.

Enquanto isso, você pode agendar uma triagem gratuita:
[calendly_link]

Atenciosamente,
Rodrigo Penachio
```

---

## Analytics & Tracking (Optional)

### Events to Track
1. `page_view` - Landing page view
2. `form_start` - User starts filling form
3. `form_submit` - Form submission
4. `form_success` - Successful submission
5. `form_error` - Submission error
6. `cta_click` - CTA button clicks
7. `section_view` - Section scrolls

### UTM Parameters
Store UTM parameters in lead data:
- utm_source
- utm_medium
- utm_campaign
- utm_content
- utm_term

---

## Testing Checklist

### Backend Testing
- [ ] Lead creation with valid data
- [ ] Email validation
- [ ] Required field validation
- [ ] Duplicate email handling
- [ ] Database storage
- [ ] Email notifications
- [ ] Error responses

### Frontend Testing
- [ ] Form validation (client-side)
- [ ] API call success handling
- [ ] API call error handling
- [ ] Loading states
- [ ] Success message display
- [ ] Error message display
- [ ] Form reset after submission

### Integration Testing
- [ ] End-to-end lead capture flow
- [ ] Email delivery
- [ ] Data consistency
- [ ] Error recovery

---

## Environment Variables

### Backend (.env)
```
MONGO_URL=<existing>
DB_NAME=<existing>
ADMIN_EMAIL=contato@rodrigopenachio.com
SMTP_HOST=<smtp-server>
SMTP_PORT=587
SMTP_USER=<smtp-username>
SMTP_PASSWORD=<smtp-password>
CALENDLY_LINK=https://calendly.com/rodrigopenachio
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=<existing>
```

---

## Notes

1. **Mock Data**: Currently all data is in `/app/frontend/src/data/mock.js`. This allows the frontend to work independently for review.

2. **Progressive Enhancement**: Frontend works without backend. Backend integration enhances functionality.

3. **Error Handling**: Implement graceful error handling on both frontend and backend.

4. **Security**: 
   - Sanitize all inputs
   - Implement rate limiting on API endpoints
   - Add CORS configuration
   - Use HTTPS in production

5. **Performance**:
   - Index email field in MongoDB
   - Implement caching for config endpoint
   - Add request timeout handling

6. **LGPD Compliance**:
   - Store consent timestamp
   - Provide data deletion mechanism
   - Implement unsubscribe functionality
   - Keep audit logs

---

## Implementation Priority

### Phase 1 (MVP)
1. Lead capture endpoint
2. Basic email validation
3. MongoDB storage
4. Frontend integration

### Phase 2 (Enhanced)
1. Email notifications
2. Admin dashboard
3. Lead status management
4. Analytics integration

### Phase 3 (Advanced)
1. CRM integration
2. Automated follow-ups
3. A/B testing
4. Advanced analytics
