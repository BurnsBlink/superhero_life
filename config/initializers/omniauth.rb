OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '22911123253-9sutdpln8g60e9726gb3kbbuvnp32d1p.apps.googleusercontent.com', 'b38p6786v-9er_lcmMvaJuEe', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
