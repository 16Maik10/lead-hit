<template>
  <div class="auth">
    <h1 class="auth__title">Lead<span>Hit</span></h1>
    <form @submit.prevent="sendRequest" action="" class="form">
      <fieldset>
        <legend>Авторизация</legend>
        <label>
          ID
          <input
            v-model="id"
            type="text"
            :class="{invalid: isHintShow}"
            @input="isHintShow=false"
            placeholder="ID сайта">
          <p class="hint">id сайта должен содержать 24 символа</p>
        </label>
        <button type="submit">Войти</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import router from '@/router';
// @ is an alias to /src
export default {
  name: 'AuthView',
  data() {
    return {
      id: "",
      isHintShow: false
    }
  },
  computed: {
    isIdValid() {
      return this.id.length === 24;
    }
  },
  methods: {
    sendRequest() {
      if (!this.isIdValid) {
        this.isHintShow = true;
        return;
      } else {
        console.log('Nice!');
        fetch("https://track-api.leadhit.io/client/test_auth", {
          method: "GET",
          headers: {
            "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
            "Leadhit-Site-Id": this.id
          }
        })
        .then(result => result.json())
        .then(data => {
          if (data.message === "ok") {
            localStorage.setItem("Leadhit-Site-Id", "5f8475902b0be670555f1bb3");
            router.push("/analytics");
          }
        })
        .catch(error => {console.log(error)})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.auth__title {
  &>span {
    font-weight: bolder;
    color: #2c3236;
  }
}

.form {
  margin: 20px auto;
  max-width: 500px;
}

fieldset {
  display: flex;
  flex-direction: column;
  border: 1px solid #2c3236;
  border-radius: 10px;
  padding: 1rem;

  &>legend {
    font-size: 24px;
  }

  &>label {
    text-align: left;
    font-size: 22px;
    font-weight: bold;

    &>input {
      width: 95%;
      font-size: 16px;
      padding: 7px 5px;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.623);
      margin-top: 10px;

      &.invalid {
        border-color: #ff5050;
        outline-color: #ff5050;
        &+.hint {
          visibility: visible;
        }
      }
    }
  }

  &>button {
    align-self: center;
    background-color: #fff;
    color: #35db9b;
    border: 1px solid #35db9b;
    padding: 10px 25px;
    border-radius: 12px;
    font-size: 32px;
    cursor: pointer;
    margin-top: 1em;
    transition: all 0.2s linear;

    &:hover {
      background-color: #35db9b;
      color: #fff;
      border-color: #fff;
    }
  }
}

.hint {
  visibility: hidden;
  font-size: 14px;
  color: #ff5050;
  margin: 5px 10px;
}
</style>
