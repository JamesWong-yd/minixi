<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
      <div class="layout-user">
      </div>
    </Menu>
    <div class="layout-content">
      <Row>
        <Col span="5">
        <Menu active-name="1" width="auto" @on-select="selectNav">
          <MenuItem name="index">
          <Icon type="navicon-round"></Icon>
          首页
          </MenuItem>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              导航一
            </template>
            <MenuItem name="form"> form </MenuItem>
            <MenuItem name="datepicker"> datepicker </MenuItem>
            <MenuItem name="table"> table </MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              导航二
            </template>
            <MenuItem name="notice"> notice </MenuItem>
            <MenuItem name="markdown"> markdown </MenuItem>
            <MenuItem name="form"> form </MenuItem>
            <MenuItem name="datepicker"> datepicker </MenuItem>
            <MenuItem name="table"> table </MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              导航三
            </template>
            <MenuItem name="form"> form </MenuItem>
            <MenuItem name="datepicker"> datepicker </MenuItem>
            <MenuItem name="table"> table </MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="gear-b"></Icon>
              导航四
            </template>
            <MenuItem name="notice"> notice </MenuItem>
            <MenuItem name="markdown"> markdown </MenuItem>
            <MenuItem name="form"> form </MenuItem>
            <MenuItem name="datepicker"> datepicker </MenuItem>
            <MenuItem name="table"> table </MenuItem>
          </Submenu>
        </Menu>
        </Col>
        <Col span="19">
        <div class="layout-content-main">
          <div class="wrapper-content">
            <router-view></router-view>
          </div>
        </div>
        </Col>
      </Row>
    </div>
    <div class="layout-copy">
      2017 &copy; James Wong
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectNav (name) {
      this.$router.push('/' + name)
    }
  }
}
</script>

<style scoped>
.layout {
  background: #eee;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-content {
  min-height: 200px;
  margin: 70px 50px 30px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 0px 2px #ccc;
  border-radius: 4px;
  position: relative;
}

.wrapper-content:after {
  content: "";
  display: block;
  width: 2px;
  background: #d7dde4;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>
