# Submitting Data using Action

1. Action method can be used to perform an action on submission of Forms.
2. Custom Form component need to be used along with name attribute for all inputs.
3. Action function will get an data object. To generate correct request object `method="post"` attribute should be used.
4. `Data.request.formData()` method can be used to get form data Object.
5. `Object.fromEntries(formData)` can be used to get actual input data.
6. `redirect()` response can be returned for navigation after submission.