<template>
  <div class="container">
    <div>
      <h1 class="title relative bg-transparent">
        Wallpaper Groups
      </h1>
      <div class="table-container">

        <table>
          <tr>
            <td></td>
            <td colspan=5 class="underline italic">Reflection?</td>
          </tr>
          <tr>
            <td class="underline italic">Smallest Rotation?</td>
            <td colspan=3>Yes</td>
            <td colspan=2>No</td>
          </tr>
          <tr class="bg-orange">
            <td>360&deg;/6:</td>
            <td colspan=3><nuxt-link to="p6m" class="disabled">p6m (*632)</nuxt-link></td>
            <td colspan=2><nuxt-link to="p6">p6 (636)</nuxt-link></td>
          </tr>
          <tr>
            <td rowspan=3>360&deg;/4:</td>
            <td colspan=3>Has mirrors at 45&deg;?</td>
            <td rowspan=3 colspan=2><nuxt-link to="p4">p4 (442)</nuxt-link></td>
          </tr>
          <tr>
            <td colspan=2>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td colspan=2><nuxt-link to="p4m" class="disabled">p4m (*442)</nuxt-link></td>
            <td><nuxt-link to="p4g" class="disabled">p4g (4*2)</nuxt-link></td>
          </tr>
          <tr class="bg-orange">
            <td rowspan=3>360&deg;/3:</td>
            <td colspan=3>Has rotation centre off mirrors?</td>
            <td rowspan=3 colspan=2><nuxt-link to="p3">p3 (333)</nuxt-link></td>
          </tr>
          <tr class="bg-orange">
            <td colspan=2>Yes</td>
            <td>No</td>
          </tr>
          <tr class="bg-orange">
            <td colspan=2><nuxt-link to="p31m" class="disabled">p31m (3*3)</nuxt-link></td>
            <td><nuxt-link to="p3m1" class="disabled">p3m1 (*333)</nuxt-link></td>
          </tr>
          <tr>
            <td rowspan=5>360&deg;/2:</td>
            <td colspan=3>Has perpendicular reflections?</td>
            <td rowspan=2 colspan=2>Has glide reflection?</td>
          </tr>
          <tr>
            <td colspan=2>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td colspan=2>Has rotation centre off mirrors?</td>
            <td rowspan=3><nuxt-link to="pmg" class="disabled">pmg (22*)</nuxt-link></td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Yes</td>
            <td>No</td>
            <td rowspan=2><nuxt-link to="pgg">pgg (22x)</nuxt-link></td>
            <td rowspan=2><nuxt-link to="p2">p2 (2222)</nuxt-link></td>
          </tr>
          <tr>
            <td><nuxt-link to="cmm" class="disabled">cmm (2*22)</nuxt-link></td>
            <td><nuxt-link to="pmm" class="disabled">pmm (*2222)</nuxt-link></td>
          </tr>
          <tr class="bg-orange">
            <td rowspan=3>None</td>
            <td colspan=3>Has glide axis off mirrors?</td>
            <td colspan=2>Has glide reflection?</td>
          </tr>
          <tr class="bg-orange">
            <td colspan=2>Yes</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr class="bg-orange">
            <td colspan=2><nuxt-link to="cm" class="disabled">cm (*x)</nuxt-link></td>
            <td><nuxt-link to="pm" class="disabled">pm (**)</nuxt-link></td>
            <td><nuxt-link to="pg">pg (xx)</nuxt-link></td>
            <td><nuxt-link to="p1">p1 (o)</nuxt-link></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
