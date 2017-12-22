function CloseioLeadGetter(Implementation, params, opts) {
  const Closeio = opts.integrations.closeio.closeio;
  const closeio = new Closeio(opts.integrations.closeio.apiKey);

  // eslint-disable-next-line no-underscore-dangle
  this.perform = () => closeio._get(`/lead/${params.leadId}`);
}

module.exports = CloseioLeadGetter;
