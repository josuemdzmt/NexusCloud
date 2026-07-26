<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <div>
          <div class="flex items-center gap-2 text-sm text-default mb-1">
            <router-link to="/inventory/product/list" class="hover:text-primary">Lista de Productos</router-link>
            <i class="ph ph-caret-right text-[10px]"></i> <span>{{ strTitle }}</span>
          </div>
          <h1 class="text-gray-900 text-xl font-bold mb-0">{{ strTitle }}</h1>
        </div>
      </div>

      <nx-form-page ref="formPageRef" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
        <template #main="{ errors }">
          <div class="bg-white border border-border-color rounded-md p-4">
            <h2 class="text-lg max-lg:text-[17px] text-title mb-4">Información Basica</h2>
            <div class="grid grid-cols-2 gap-3">
              <div class="col-span-2">
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Nombre del Producto <span class="text-danger">*</span></label>
                <Field name="name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
                <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Código</label>
                <Field name="code" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">SKU <span class="text-danger">*</span></label>
                <Field name="sku" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.sku }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
                <ErrorMessage name="sku" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Código de Barras</label>
                <Field name="barcode" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Categoría</label>
                <Field name="categoryId" as="nx-combobox" :options="lstCategories" placeholder="Seleccionar Categoría" class="w-full text-sm border-border-color focus:border-primary" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Marca</label>
                <Field name="brandId" as="nx-combobox" :options="lstBrandOptions" placeholder="Seleccionar Marca" class="w-full text-sm border-border-color focus:border-primary" />
              </div>
              <div class="col-span-2">
                <label class="text-sm text-gray-900 mb-1 block">Descripción</label>
                <Field name="description" as="textarea" rows="3" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"></Field>
              </div>
            </div>
          </div>
          <div class="bg-white border border-border-color rounded-md p-4">
            <h2 class="text-lg max-lg:text-[17px] text-title mb-4">Precio y Stock</h2>
            <div class="grid grid-cols-3 gap-3">
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Precio de Venta</label>
                <Field name="sellingPrice" as="input" type="number" :class="{ 'border-danger focus:border-danger': errors.sellingPrice }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
                <ErrorMessage name="sellingPrice" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Precio de Costo</label>
                <Field name="purchasePrice" as="input" type="number" :class="{ 'border-danger focus:border-danger': errors.purchasePrice }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
                <ErrorMessage name="purchasePrice" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Cantidad</label>
                <Field name="quantity" as="input" type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Unidad</label>
                <Field name="unit" as="select" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                  <option value="">Seleccionar Unidad</option>
                  <option>Piezas</option>
                  <option>Kilogramos</option>
                </Field>
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Stock Mínimo</label>
                <Field name="reorderLevel" as="input" type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Porcentaje de Impuestos</label>
                <Field name="taxRate" as="select" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
                  <option value="">Seleccionar Impuesto</option>
                  <option>18%</option>
                </Field>
              </div>
            </div>
          </div>
        </template>
        <template #sidebar>
          <div class="bg-white border border-border-color rounded-md p-4">
            <h2 class="text-lg max-lg:text-[17px] text-title mb-4">Imagen del Producto</h2>
            <div class="relative border-2 border-dashed border-border-color rounded-md p-6 text-center cursor-pointer hover:border-primary">
              <i class="ph-duotone ph-cloud-arrow-up text-3xl text-default"></i>
              <p class="text-sm text-default mt-2 mb-0">Click o arrastre para subir la imagen</p>
              <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            </div>
          </div>
          <div class="bg-white border border-border-color rounded-md p-4">
            <h2 class="text-lg max-lg:text-[17px] text-title mb-4">Estado</h2>
            <Field name="status" as="nx-combobox" :options="lstStatusOptions" placeholder="Seleccionar Estado" class="w-full text-sm border-border-color focus:border-primary" />
          </div>
        </template>
      </nx-form-page>
    </div>
  </main>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import ProductService from '@/services/inventory/ProductService';
import ProductCategoryService from '@/services/inventory/ProductCategoryService';

const validationSchema = yup.object({
  name: yup.string().default('').required('El nombre es obligatorio').min(3, 'Mínimo 3 caracteres'),
  code: yup.string().nullable().default(''),
  sku: yup.string().default('').required('El SKU es obligatorio'),
  barcode: yup.string().nullable().default(''),
  categoryId: yup.number().nullable().default(null),
  brandId: yup.number().nullable().default(null),
  description: yup.string().nullable().default(''),
  sellingPrice: yup.number().default(0).typeError('Debe ser un número').required('Precio requerido').min(0, 'No puede ser negativo'),
  purchasePrice: yup.number().default(0).typeError('Debe ser un número').required('Costo requerido').min(0, 'No puede ser negativo'),
  quantity: yup.number().nullable().default(0),
  unit: yup.string().nullable().default(''),
  reorderLevel: yup.number().nullable().default(0),
  taxRate: yup.string().nullable().default(''),
  status: yup.string().nullable().default('Active')
});

export default {
  name: 'ProductForm',
  components: {
    Field,
    ErrorMessage
  },
  data() {
    return {
      bSpinner: false,
      strTitle: 'Producto',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      lstCategories: [],
      lstBrandOptions: [
        { label: 'Apple', value: 1 },
        { label: 'Dell', value: 2 },
        { label: 'Samsung', value: 3 }
      ],
      lstStatusOptions: [
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' }
      ]
    };
  },
  mounted() {
    this.handleGetCategories();
    if (this.$route.params.recordId) {
      this.handleInitForm(this.$route.params.recordId);
    }
  },
  methods: {
    handleGetCategories() {
      ProductCategoryService.getAll({ per_page: 100 })
        .then((response) => {
          const data = response.data || response;
          this.lstCategories = data.map((cat) => ({
            label: cat.name,
            value: cat.id
          }));
        })
        .catch((error) => console.error('Error fetching categories:', error));
    },
    handleInitForm(id) {
      this.bSpinner = true;
      ProductService.getById(id)
        .then((data) => {
          // Rellenamos el formulario dinámicamente usando la referencia al Form
          // Nota: api.js devuelve directamente response.data
          // Aseguramos que data contenga los datos esperados (podría venir envuelto en data.data dependiendo del backend)
          const formData = data.data || data;
          this.$refs.formPageRef.handleSetValues(formData);
        })
        .catch((error) => {
          console.error('Error fetching product:', error);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
      if (this.$route.params.recordId) {
        this.handleUpdate(values);
      } else {
        this.handleCreate(values);
      }
    },
    handleCreate(objForm) {
      this.bSpinner = true;
      ProductService.create(objForm)
        .then((data) => {
          console.log('Product created', data);
          this.$router.push('/inventory/product/list');
        })
        .catch((error) => console.error('Error creating product:', error))
        .finally(() => (this.bSpinner = false));
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      const id = this.$route.params.recordId;
      ProductService.update(id, objForm)
        .then((data) => {
          console.log('Product updated', data);
          this.$router.push('/inventory/product/list');
        })
        .catch((error) => console.error('Error updating product:', error))
        .finally(() => (this.bSpinner = false));
    },
    handleCancel() {
      this.$router.push('/inventory/product/list');
    }
  }
};
</script>
