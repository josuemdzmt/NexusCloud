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
                <Field name="name" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.name }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="100" />
                <ErrorMessage name="name" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Código</label>
                <Field name="code" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="50" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">SKU <span class="text-danger">*</span></label>
                <Field name="sku" as="input" type="text" :class="{ 'border-danger focus:border-danger': errors.sku }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="50" />
                <ErrorMessage name="sku" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Código de Barras</label>
                <Field name="barcode" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="50" />
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
                <Field name="description" as="textarea" rows="3" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="255"></Field>
              </div>
            </div>
          </div>
        </template>
        <template #sidebar="{ errors }">
          <!--
          <div class="bg-white border border-border-color rounded-md p-4">
            <h2 class="text-lg max-lg:text-[17px] text-title mb-4">Imagen del Producto</h2>
            <div class="relative border-2 border-dashed border-border-color rounded-md p-6 text-center cursor-pointer hover:border-primary">
              <i class="ph-duotone ph-cloud-arrow-up text-3xl text-default"></i>
              <p class="text-sm text-default mt-2 mb-0">Click o arrastre para subir la imagen</p>
              <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            </div>
          </div>
          -->
          <div class="bg-white border border-border-color rounded-md p-4">
            <h2 class="text-lg max-lg:text-[17px] text-title mb-4">Costo y Stock</h2>
            <div class="grid grid-cols-1 gap-3">
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Costo</label>
                <Field name="purchasePrice" as="input" type="number" :class="{ 'border-danger focus:border-danger': errors.purchasePrice }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
                <ErrorMessage name="purchasePrice" class="text-danger text-[11px] mt-1 block" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Unidad</label>
                <Field name="unitMeasureId" as="nx-combobox" :options="lstUnitOptions" placeholder="Seleccionar Unidad" class="w-full text-sm border-border-color focus:border-primary" />
              </div>
              <div>
                <label class="text-sm font-semibold text-gray-900 mb-1 block">Stock Mínimo</label>
                <Field name="reorderLevel" as="input" type="number" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
              </div>
            </div>
          </div>
          <div class="bg-white border border-border-color rounded-md p-4">
            <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Configuración</h4>
            <label class="flex items-center gap-2 cursor-pointer mt-1">
              <Field name="status" as="input" type="checkbox" :value="'Active'" :unchecked-value="'Inactive'" class="size-4 rounded border-border-color text-primary focus:ring-0" />
              <span class="text-sm font-semibold text-gray-900">Producto Activo</span>
            </label>
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
import BrandService from '@/services/inventory/BrandService';
import UnitMeasureService from '@/services/inventory/UnitMeasureService';
import { handleGetOrLoad } from '@/services/catalog/catalogCache';
import { handleBuildCatalogOptions } from '@/utils/catalogUtils';
import { handleError, handleSuccess } from '@/utils/toastUtils';

const validationSchema = yup.object({
  name: yup.string().default('').required('El nombre es obligatorio').min(3, 'Mínimo 3 caracteres'),
  code: yup.string().nullable().default(''),
  sku: yup.string().default('').required('El SKU es obligatorio'),
  barcode: yup.string().nullable().default(''),
  categoryId: yup.number().nullable().default(null),
  brandId: yup.number().nullable().default(null),
  description: yup.string().nullable().default(''),
  purchasePrice: yup.number().default(0).typeError('Debe ser un número').required('Costo requerido').min(0, 'No puede ser negativo'),
  unitMeasureId: yup.number().nullable().default(null),
  reorderLevel: yup.number().nullable().default(0),
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
      objCurrentProduct: null,
      lstRawCategories: [],
      lstRawBrands: [],
      lstRawUnits: []
    };
  },
  computed: {
    lstCategories() {
      return handleBuildCatalogOptions(this.lstRawCategories, this.objCurrentProduct?.categoryId);
    },
    lstBrandOptions() {
      return handleBuildCatalogOptions(this.lstRawBrands, this.objCurrentProduct?.brandId);
    },
    lstUnitOptions() {
      return handleBuildCatalogOptions(this.lstRawUnits, this.objCurrentProduct?.unitMeasureId);
    }
  },
  mounted() {
    this.handleGetCategories();
    this.handleGetBrands();
    this.handleGetUnits();
    if (this.$route.params.recordId) {
      this.handleInitForm(this.$route.params.recordId);
    }
  },
  methods: {
    handleGetBrands() {
      return handleGetOrLoad('brands', () =>
        BrandService.getAll({ per_page: 100 }).then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          return Array.isArray(lstData) ? lstData : [];
        })
      )
        .then((lstBrands) => {
          this.lstRawBrands = lstBrands;
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener las marcas', objError));
    },
    handleGetUnits() {
      return handleGetOrLoad('unitMeasures', () =>
        UnitMeasureService.getAll({ per_page: 100 }).then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          return Array.isArray(lstData) ? lstData : [];
        })
      )
        .then((lstUnits) => {
          this.lstRawUnits = lstUnits;
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener las unidades de medida', objError));
    },
    handleGetCategories() {
      return handleGetOrLoad('productCategories', () =>
        ProductCategoryService.getAll({ per_page: 100 }).then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          return Array.isArray(lstData) ? lstData : [];
        })
      )
        .then((lstCategories) => {
          this.lstRawCategories = lstCategories;
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener las categorías', objError));
    },
    handleInitForm(id) {
      this.bSpinner = true;
      ProductService.getById(id)
        .then((data) => {
          const formData = data.data || data;
          this.objCurrentProduct = formData;
          this.$refs.formPageRef.handleSetValues(formData);
        })
        .catch((error) => {
          handleError('Ocurrió un problema al obtener la información del producto', error);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleSubmit(values) {
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
          const objProduct = data.data || data;
          handleSuccess('Producto creado exitosamente');
          if (objProduct?.id) {
            this.$router.push(`/inventory/product/${objProduct.id}/details`);
            return;
          }
          this.$router.push('/inventory/product/list');
        })
        .catch((error) => {
          handleError('Ocurrió un problema al crear el producto', error);
        })
        .finally(() => (this.bSpinner = false));
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      const id = this.$route.params.recordId;
      ProductService.update(id, objForm)
        .then((data) => {
          handleSuccess('Producto actualizado exitosamente');
          this.$router.push(`/inventory/product/${id}/details`);
        })
        .catch((error) => {
          handleError('Ocurrió un problema al actualizar el producto', error);
        })
        .finally(() => (this.bSpinner = false));
    },
    handleCancel() {
      const id = this.$route.params.recordId;
      if (id) {
        this.$router.push(`/inventory/product/${id}/details`);
        return;
      }
      this.$router.push('/inventory/product/list');
    }
  }
};
</script>
